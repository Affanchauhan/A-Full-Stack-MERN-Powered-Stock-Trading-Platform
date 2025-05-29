import { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
    const [allPositions, setAllPositions] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3002/allPositions").then((res) => {
            setAllPositions(res.data);
        });
    }, []);

    return (
        <>
            <h3 className="title">Positions ({allPositions.length})</h3>

            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg.</th>
                            <th>LTP</th>
                            <th>P&L</th>
                            <th>Chg.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPositions.map((stock, index) => {
                            // Convert values to numbers to ensure toFixed works
                            const price = Number(stock.price);
                            const avg = Number(stock.avg);
                            const qty = Number(stock.qty);
                            
                            const curValue = price * qty;
                            const isProfit = curValue - avg * qty >= 0.0;
                            const profClass = isProfit ? "profit" : "loss";
                            const dayClass = stock.isLoss ? "loss" : "profit";

                            return (
                                <tr key={index}>
                                    <td>{stock.product}</td>
                                    <td>{stock.name}</td>
                                    <td>{qty}</td>
                                    <td>{avg.toFixed(2)}</td>
                                    <td>{price.toFixed(2)}</td>
                                    <td className={profClass}>
                                        {(curValue - avg * qty).toFixed(2)}
                                    </td>
                                    <td className={dayClass}>{stock.day}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Positions;
