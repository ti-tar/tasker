import React from "react";
import { connect } from 'react-redux';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';
import moment from 'moment';
import config from '../config';


class ChartComponent extends React.Component {

    getChartData(){

        let currentHourStartMoment = moment(
            `${moment().format('YYYY')}-${moment().format('MM')}-${moment().format('DD')} ${moment().format('HH')}:00:00`,
            "YYYY-MM-DD HH:mm:ss").valueOf();

        let barDiapason = 3600 * 1000;

        let curentChartData = (new Array(24)).fill({}).map((v, index) => {


            let barStartMoment = currentHourStartMoment - barDiapason * index;
            let barEndMoment = barStartMoment + barDiapason;

            let spentTimeDuringHour = 0;

            for (let i in this.props.tasks) {
                if (
                    //либо начало задачи в диапазоне столбца
                    ( barStartMoment < this.props.tasks[i].startTime && this.props.tasks[i].startTime < barEndMoment )
                    ||
                    //либо конец
                    ( barStartMoment < this.props.tasks[i].endTime && this.props.tasks[i].endTime < barEndMoment )
                    //либо весь столбец в диапазоне задачи
                    ||
                    ( barStartMoment >= this.props.tasks[i].startTime && barEndMoment <= this.props.tasks[i].endTime)
                ) {
                    let taskEndTime = this.props.tasks[i].endTime < barEndMoment ? this.props.tasks[i].endTime : barEndMoment;
                    let taskStartTime = this.props.tasks[i].startTime > barStartMoment ? this.props.tasks[i].startTime : barStartMoment;
                    spentTimeDuringHour += taskEndTime - taskStartTime;
                }
            }

            return {
                name: moment(barStartMoment).format('HH'),
                tv: spentTimeDuringHour / (60 * 1000)
            }
        }).reverse();

        config.debug && console.log(curentChartData);

        return curentChartData;
    }

    render(){
        return <section>
            <ResponsiveContainer minHeight={300}>
                <BarChart data={this.getChartData()}>
                    <XAxis dataKey="name"/>
                    <YAxis  domain={[0, 60]} />
                    <Legend wrapperStyle={{color:'#000'}} />
                    <CartesianGrid />
                    <Bar dataKey='tv' fill='#3249c7' barSize={25} name="Minutes in these hours" />
                </BarChart>
            </ResponsiveContainer>
        </section>;
    }

}

const mapStateToProps = (state) => {
    return {
        tasks : state.tasks
    }
};

export default connect(mapStateToProps)(ChartComponent);