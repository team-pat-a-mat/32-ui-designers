interface CardProps {
  index: number;
}

export default function Card({ index }: CardProps) {
  console.log(index);

  return (
    <div className="bg-slate-500 bg-opacity-50 rounded-md shadow-md px-20 py-20">
      {index}
    </div>
  );
}
