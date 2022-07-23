import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
export const Recursion = ({ objectKey = false, data }) => {
	const [showObject, setShowObject] = useState(false);
	const [up, isUp] = useState(false);
	// console.log(objectKey);

	if (typeof data != "object") {
		return (
			<>
				{objectKey && (
					<p>
						{objectKey} : {data}
					</p>
				)}
			</>
		);
	} else {
		return (
			<>
				{objectKey && (
					<p
						onClick={() => {
							setShowObject(!showObject);
							isUp(!up);
						}}
					>
						{`${objectKey}:${
							typeof data === "object" ? "" : data
						}`}

						<span className='fieldInfo'>
							{up ? (
								<>
									<ArrowDropUpIcon />
								</>
							) : (
								<ArrowDropDownIcon />
							)}
							{"  "}
							{Object.keys(data).length} field(s)
							{"  "}
						</span>
					</p>
				)}

				{(!objectKey || showObject) && (
					<div className='lastDiv'>
						{Object.keys(data).map((key, index) => {
							return (
								<Recursion
									key={key + index}
									data={data[key]}
									objectKey={key}
								/>
							);
						})}
					</div>
				)}
			</>
		);
	}
};
