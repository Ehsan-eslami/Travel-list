export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items in your packing list 🚀 </em>
      </p>
    );

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything, ready to go 😎"
          : ` you have ${numItem} item in your list, and you alredy packed ${numPacked} 
        (${percentage}%)`}
      </em>
    </footer>
  );
}
