import React from "react";
import { createContext, useState } from "react";

export const ContextFunctions = createContext()

const ContextProvider = ({ children }) => {
	const [isModal, setIsModal] = useState(false)

	function modalChange() {
		setIsModal(!isModal)
	}

	const [isModalAll, useIsModalAll] = useState(false)

	function modalChangeAll() {
		useIsModalAll(!isModalAll)
	}
	const [isModalAddBasket, useIsModalAddBasket] = useState(false)

	function modalChangeAddBasket() {
		useIsModalAddBasket(!isModalAddBasket)
	}

	return (
		<ContextFunctions.Provider value={{ modalChange, isModal, isModalAll, modalChangeAll, modalChangeAddBasket, isModalAddBasket }} >
			{children}
		</ContextFunctions.Provider>
	)
}

export default ContextProvider