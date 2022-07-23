import React, { useState } from "react";

import "./Formatter.css";
import { Recursion } from "./Recursion";

export const Formatter = () => {
	const [output, setOutput] = useState();
	const [data, setData] = useState("");

	const [valErr, setValErr] = useState("");

	const formatFunc = () => {
		try {
			let obj = JSON.stringify(JSON.parse(data), null, 4);
			handleCollapse();
		} catch (err) {
			setValErr(
				"Error :" + err + " " + "[Delete and RE-Enter the Data]"
			);
			console.log(valErr);
		}
	};
	const handleCollapse = () => {
		let obj = JSON.parse(JSON.stringify(JSON.parse(data), null, 4));

		setOutput(obj);
	};

	const handleDelete = () => {
		setOutput("");
		setData("");
		setValErr("");
	};

	return (
		<>
			<div className='Container'>
				<div className='inputContainer'>
					<textarea
						className='inputText'
						type='text'
						rows='26'
						cols='35'
						placeholder='Enter Unformated JSON....'
						value={data}
						onChange={(e) => {
							setData(e.target.value);
						}}
					></textarea>
				</div>
				<div className='buttonsDiv'>
					<button
						className='formatButton'
						type='submit'
						onClick={formatFunc}
					>
						Format
					</button>
					<p className='heading'>JSON Formatter</p>
					<button
						className='deleteButton'
						type='submit'
						onClick={handleDelete}
					>
						Delete
					</button>
				</div>
				<div className='outputContainer'>
					<div
						className={
							valErr !== ""
								? "outputAreaWrong"
								: "outputAreaRight"
						}
						id='outputArea'
						type='text'
						data-placeholder='Your Output Goes Here'
					>
						<div
							className={
								valErr !== ""
									? "divDisp"
									: "divNone"
							}
						>
							{valErr}
						</div>
						{
							<div
								className={
									valErr == ""
										? "divDisp"
										: "divNone"
								}
							>
								<p
									style={{
										position: "fixed",
									}}
								>{`{ `}</p>
								<Recursion data={output} />
								<p>{` }`}</p>
							</div>
						}
					</div>
				</div>
				<div className='sig'>
					<span>by Prithwish Samanta </span>
				</div>
			</div>
		</>
	);
};
