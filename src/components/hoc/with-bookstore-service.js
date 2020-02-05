import React from "react";
import { BookstoreServiceConsumer } from "../bookstore-service-context";


const withBookstoreService = (mapMethodsToProps) => (Wrapped) => {
	return (props) => {
		
		return (
		<BookstoreServiceConsumer>
			{
				( bookstoreService ) => {
					const serviceProps = mapMethodsToProps(bookService);
					return (
						<Wrapped { ...props } bookstoreService = {bookstoreService}/>
					)
				}
			}
		</BookstoreServiceConsumer>
		);
	}	
};

export default withBookstoreService;