import React from 'react';
import { ResponsiveContainer, LineChart, Line, Legend, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const pdata = [
    {
        Month: 'Jan',
        Sale: -0.001,
        sValue: -0.001
    },
    {
        Month: 'Feb',
        Sale: -0.0005,
        sValue: -0.0005
    },
    {
        Month: 'Mar',
        Sale: -0.001,
        sValue: -0.001
    },
    {
        Month: 'Apr',
        Sale: 0,
        sValue: 0
    },
    {
        Month: 'May',
        Sale: -0.0005,
        sValue: -0.0005
    },
    {
        Month: 'Jun',
        Sale: 0,
        sValue: 0
    },
    {
        Month: 'Jul',
        Sale: 0.0005,
        sValue: 0.0005
    },
    {
        Month: 'Aug',
        Sale: 0,
        sValue: 0
    },
    {
        Month: 'Sep',
        Sale: -0.0005,
        sValue: -0.0005
    },
    {
        Month: 'Oct',
        Sale: -0.0004,
        sValue: -0.0005
    },
    {
        Month: 'Nov',
        Sale: 0,
        sValue: 0
    },
    {
        Month: 'Dec',
        Sale: -0.0006,
        sValue: -0.0005
    },
    
];
const ChartMonthlySales = () => {
    return (
        <>
          <ResponsiveContainer width="100%" aspect={1}>
            <LineChart data={pdata} margin={{right:10,top:10, bottom:20, left:-35}} >
            {/* <Legend /> */}
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="Month" tickCount={12} interval={'preserveStartEnd'}/>
            <YAxis tickCount={5} tickFormatter={(v)=>v+"k"} />
             <Line dataKey="Sale" stroke="black" activeDot={{r:5}} />
             <Tooltip contentStyle={{backgroundColor:"#abacad", fontWeight:"400", color:"red"}} />
            </LineChart>
          </ResponsiveContainer>
        </>
    )
}

export default ChartMonthlySales;
