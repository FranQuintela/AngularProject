import { Injectable } from '@angular/core';

//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the
//data.service.ts file instead (simplify rename it to the name
//of this file to use it instead)
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IPost, IOrder, IState, IPagedResults, ICustomerResponse, IPostResponse } from '../shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = '/api/customers';
    baseStatesUrl: string = '/api/states'
    basePostsUrl: string = '/api/posts'

    constructor(private http: HttpClient) {

    }

    getCustomers() : Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.baseUrl)
            .pipe(
                   map((customers: ICustomer[]) => {
                       this.calculateCustomersOrderTotal(customers);
                       return customers;
                   }),
                   catchError(this.handleError)
                );
    }

    getCustomersPage(page: number, pageSize: number) : Observable<IPagedResults<ICustomer[]>> {
        return this.http.get<ICustomer[]>(`${this.baseUrl}/page/${page}/${pageSize}`, { observe: 'response' })
            .pipe(
                    map((res) => {
                        //Need to observe response in order to get to this header (see {observe: 'response'} above)
                        const totalRecords = +res.headers.get('x-inlinecount');
                        let customers = res.body as ICustomer[];
                        this.calculateCustomersOrderTotal(customers);
                        return {
                            results: customers,
                            totalRecords: totalRecords
                        };
                    }),
                    catchError(this.handleError)
                );
    }

    getCustomer(id: string) : Observable<ICustomer> {
        return this.http.get<ICustomer>(this.baseUrl + '/' + id)
            .pipe(
                catchError(this.handleError)
            );
    }

    insertCustomer(customer: ICustomer) : Observable<ICustomer> {
        return this.http.post<ICustomerResponse>(this.baseUrl, customer)
            .pipe(
                   map((data) => {
                       console.log('insertCustomer status: ' + data.status);
                       return data.customer;
                   }),
                   catchError(this.handleError)
                );
    }

    updateCustomer(customer: ICustomer) : Observable<ICustomer> {
        return this.http.put<ICustomerResponse>(this.baseUrl + '/' + customer._id, customer)
            .pipe(
                   map((data) => {
                       console.log('updateCustomer status: ' + data.status);
                       return data.customer;
                   }),
                   catchError(this.handleError)
                );
    }

    deleteCustomer(id: string) : Observable<boolean> {
        return this.http.delete<boolean>(this.baseUrl + '/' + id)
            .pipe(
                catchError(this.handleError)
            );
    }

    getStates(): Observable<IState[]> {
        return this.http.get<IState[]>(this.baseStatesUrl)
            .pipe(
                catchError(this.handleError)
            );
    }

    calculateCustomersOrderTotal(customers: ICustomer[]) {
        for (let customer of customers) {
            if (customer && customer.orders) {
                let total = 0;
                for (let order of customer.orders) {
                    total += (order.price * order.quantity);
                }
                customer.orderTotal = total;
            }
        }
    }

    getPosts(): Observable<IPost[]> {
      return this.http.get<IPost[]>(this.basePostsUrl)
          .pipe(
              catchError(this.handleError)
          );
  }

  getPostsPage(page: number, pageSize: number) : Observable<IPagedResults<IPost[]>> {
      return this.http.get<IPost[]>(`${this.basePostsUrl}/page/${page}/${pageSize}`, { observe: 'response' })
          .pipe(
                  map((res) => {
                      //Need to observe response in order to get to this header (see {observe: 'response'} above)
                      const totalRecords = +res.headers.get('x-inlinecount');
                      let posts = res.body as IPost[];
                      return {
                          results: posts,
                          totalRecords: totalRecords
                      };
                  }),
                  catchError(this.handleError)
              );
  }

  getPost(id: string) : Observable<IPost> {
      return this.http.get<IPost>(this.basePostsUrl + '/' + id)
          .pipe(
              catchError(this.handleError)
          );
  }

  insertPost(post: IPost) : Observable<IPost> {
      return this.http.post<IPostResponse>(this.basePostsUrl, post)
          .pipe(
                 map((data) => {
                     console.log('insertPost status: ' + data.status);
                     return data.post;
                 }),
                 catchError(this.handleError)
              );
  }

  updatePost(post: IPost) : Observable<IPost> {
      return this.http.put<IPostResponse>(this.basePostsUrl + '/' + post._id, post)
          .pipe(
                 map((data) => {
                     console.log('updatePost status: ' + data.status);
                     return data.post;
                 }),
                 catchError(this.handleError)
              );
  }

  deletePost(id: string) : Observable<boolean> {
      return this.http.delete<boolean>(this.basePostsUrl + '/' + id)
          .pipe(
              catchError(this.handleError)
          );
  }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
          let errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }

}
