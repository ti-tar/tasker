import React from "react";
import { connect } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';
import moment from 'moment';


class ChartComponent extends React.Component {

    getChartData(){

        let currentDay = moment().format('D');

        let chartMonth = moment().format('M');
        let chartYear = moment().format('YYYY');

        let currMonthChartData = (new Array(parseInt(currentDay, 10))).fill({}).map((v, index) => {

            let day = index + 1;

            let dayStartMoment = moment(`${chartYear}-${chartMonth}-${day}`, "YYYY-DD-MM").valueOf();
            let dayEndMoment = dayStartMoment + (86400 * 1000);

            let spentTimeDuringDay = 0;

            for (let i in this.props.tasks) {
                if (
                        ( dayStartMoment < this.props.tasks[i].time_start && this.props.tasks[i].time_start < dayEndMoment )
                    ||
                        ( dayStartMoment < this.props.tasks[i].time_end && this.props.tasks[i].time_end < dayEndMoment)
                ) {
                    let taskEndTime = this.props.tasks[i].time_end < dayEndMoment ? this.props.tasks[i].time_end : dayEndMoment;
                    spentTimeDuringDay += taskEndTime - this.props.tasks[i].time_start;
                }
            }

            return {
                name: day,
                tv: spentTimeDuringDay / (60*60* 1000)
            }
        });

        return currMonthChartData;
    }

    legendText(){
        return `Hours in these days`;
    }

    render(){
        return <section>
            <BarChart width={500} height={200} data={this.getChartData()} style={{ margin : '0 auto' }}>
                <XAxis dataKey="name"/>
                <YAxis />
                <Legend iconType="circle" content={this.legendText} />
                <Bar dataKey='tv' fill='#3249c7' data={[]}/>
            </BarChart>
        </section>;
    }

}

export default connect((s)=>{return {tasks:s.tasks.filter(t=>t.status===1)}})(ChartComponent);