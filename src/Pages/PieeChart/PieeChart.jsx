
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Category 1', value: 30 },
  { name: 'Category 2', value: 40 },
  { name: 'Category 3', value: 20 },
];
const COLORS = ['#ff5733', '#33ff57', '#337aff'];
const PieeChart = () => {
return (
        <div>
            <h1>this is chart</h1>
            
            <div className="pie-chart">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
        </div>
    );
};

export default PieeChart;