import '../styles/Graph.css'

import React, { Component } from 'react'
import Chart from "chart.js";


export default class Graph extends Component {
    state = {
        title: this.props.exercisesInfos.title,
        unit1: (this.props.exercisesInfos.data.map(d => {
            return d.unit1Data
    })),
        unit2: (this.props.exercisesInfos.data.map(d => {
            return d.unit2Data
    })),
        dates: (this.props.exercisesInfos.data.map(d => {
            return d.date.slice(0, 10).split("-").join("/")
    })),
    }

    

    chartRef = React.createRef();

    componentDidMount() {
        const average = [];
        for (let i=0; i<this.state.unit1.length; i++) {
            let sum = this.state.unit1[i] + this.state.unit2[i];
            average.push(sum/2)
        };


        const myChartRef = this.chartRef.current.getContext("2d");

        const {height: graphHeight} = myChartRef.canvas;
        var gradientFill = myChartRef.createLinearGradient(0, 0, 0, graphHeight);
        gradientFill.addColorStop(0, "rgba(251,51,83,100)");
        gradientFill.addColorStop(1, "rgba(255,255,255,100)")

        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: ["start", ...this.state.dates],
                datasets: [
                    {data: [0, ...average], borderColor: "#FB3353", backgroundColor: gradientFill, borderWidth: 0.9}
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
                            fontFamily: "Muli",
                            display: false
                        },
                    }],
                    yAxes: [{
                        gridLines: {
                            display: true
                        },
                        ticks: {
                            // display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 2
                    }
                }
            }
        })
    }

    render() {
        console.log(this.props.exercisesInfos)
        console.log(this.state)
        return (
            
            <div className="chartWrapper">
                <div className="chartAreaWrapper">
                    <canvas
                    id="myChart"
                    ref={this.chartRef}
                    /> 
                </div>
            </div>
        )
    }
}
