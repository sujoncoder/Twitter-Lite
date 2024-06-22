const SearchBox = () => {
  return (
    <div className="sticky top-0 bg-white py-2">
      <input
        type="text"
        placeholder="Search..."
        className="rounded-full bg-gary-100 border outline-none border-gray-200 w-full px-4 py-2"
      />
    </div>
  );
};

export default SearchBox;
