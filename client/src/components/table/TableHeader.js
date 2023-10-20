import React from 'react'
import { header } from './header';

export const TableHeader = () => {
    return (
        <thead>
            <tr >
            {
               header.map((itm,ind)=>{
                return(                                
                    <th key={ind}>{itm.header}</th>
                )})
            }
            </tr>
        </thead>
    )
}
export default TableHeader
