import React from "react";
import { connect } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';
import moment from 'moment';
import config from "../config";


class ChartComponent extends React.Component {

    getChartData(){

        let currentDay = moment().format('DD');

        let chartMonth = moment().format('MM');
        let chartYear = moment().format('YYYY');

        let currMonthChartData = (new Array(parseInt(currentDay, 10))).fill({}).map((v, index) => {

            let day = index + 1;

            let dayStartMoment = moment(`${chartYear}-${chartMonth}-${day}`, "YYYY-MM-DD").valueOf();
            let dayEndMoment = dayStartMoment + (86400 * 1000);

            let spentTimeDuringDay = 0;

            for (let i in this.props.tasks) {
                if (
                        ( dayStartMoment < this.props.tasks[i].startTime && this.props.tasks[i].startTime < dayEndMoment )
                    ||
                        ( dayStartMoment < this.props.tasks[i].endTime && this.props.tasks[i].endTime < dayEndMoment)
                ) {
                    let taskEndTime = this.props.tasks[i].endTime < dayEndMoment ? this.props.tasks[i].endTime : dayEndMoment;
                    let taskStartTime = this.props.tasks[i].startTime > dayStartMoment ? this.props.tasks[i].startTime : dayStartMoment;
                    spentTimeDuringDay += taskEndTime - taskStartTime;
                }
            }

            return {
                name: day,
                tv: spentTimeDuringDay / (60*60* 1000)
            }
        });

        config.debug && console.log(this);
        config.debug && console.log(currMonthChartData);

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

const mapStateToProps = (state) => {
    return {
        tasks : state.tasks
    }
};

export default connect(mapStateToProps)(ChartComponent);