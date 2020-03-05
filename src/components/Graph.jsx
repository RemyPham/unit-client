import '../styles/Graph.css'

import React, { Component } from 'react'
import Chart from "chart.js";



export default class Graph extends Component {
    exInfos = this.props.exercisesInfos
    // state = {
    //     title: exInfos.title
    //     unit1: (exInfos.data.filter(d => {
    //         return d.unit1Data
    // })),
    //     unit2: (exInfos.data.filter(d => {
    //         return d.unit2Data
    // })),
    //     dates: (exInfos.data.filter(d => {
    //         return d.date
    // })),
    // }

    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        const {height: graphHeight} = myChartRef.canvas;
        var gradientFill = myChartRef.createLinearGradient(0, 0, 0, graphHeight);
        gradientFill.addColorStop(0, "rgba(251,51,83,100)");
        gradientFill.addColorStop(1, "rgba(255,255,255,100)")

        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {data: [86, 67, 91], borderColor: "#FB3353", backgroundColor: gradientFill, borderWidth: 0.9}
                ]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontColor: "rgba(108, 123, 138, 0.6)",
                            fontSize: 10,
                            fontFamily: "Muli"
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0
                    }
                }
            }
        })
    }

    render() {
        console.log(this.exInfos)
        return (
            <div>
                <canvas
                id="myChart"
                ref={this.chartRef}
                />
            </div>
        )
    }
}
