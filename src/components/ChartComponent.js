import React from "react";
import { connect } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';


class ChartComponent extends React.Component {

    getChartData(){
        let chartData = [];
        console.log(this.props);

        for (let i in this.props.tasks){
            chartData.push({
                name: this.props.tasks[i].id,
                tv: (this.props.tasks[i].time_end - this.props.tasks[i].time_start) / 1000
            });
        }

        return chartData;
    }

    legendText(){
        return 'Minutes in these hours';
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