import CalendarHeatmap from 'react-calendar-heatmap';
import '../app.css'; // Import your CSS file for styling

export const Heatmap = () => {
  const data = [
    { date: '2024-01-01', count: 1 },
    { date: '2024-01-22', count: 2 },
    { date: '2024-02-01', count: 3 },
    { date: '2024-03-01', count: 4 },
    { date: '2024-04-01', count: 5 },
    { date: '2024-05-01', count: 6 },
    { date: '2024-06-01', count: 7 },
    { date: '2024-07-01', count: 8 },
    { date: '2024-08-01', count: 9 },
    { date: '2024-09-01', count: 10 },
    { date: '2024-10-01', count: 11 },
    { date: '2024-11-01', count: 12 },
    { date: '2024-12-01', count: 13 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-5">Activity Heatmap</h1>
      <CalendarHeatmap 
        startDate={new Date('2024-01-01')}
        endDate={new Date('2024-12-31')}
        values={data}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${Math.min(value.count, 4)}`; // Limit to color-scale-4 for counts > 4
        }}
      />
    </div>
  );
};
