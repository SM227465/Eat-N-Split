export default function Button(props) {
  const { children, onClick } = props;
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
}
