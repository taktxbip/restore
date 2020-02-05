import React, { Component } from "react";
import Spinner from "../spinner";
import ErrorBoundry from "../error-boundry";
import { BookstoreServiceProvider } from "../bookstore-service-context";

export default class App extends Component {

	render() {
		return (
			<div className="restore">
				<ErrorBoundry>
					<BookstoreServiceProvider>
						<Spinner />
					</BookstoreServiceProvider>
				</ErrorBoundry>
			</div>
		);
	}
};

