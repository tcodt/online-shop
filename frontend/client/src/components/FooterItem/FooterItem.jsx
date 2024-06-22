// eslint-disable-next-line react/prop-types
export default function FooterItem({ title, children }) {
  return (
    <div className="grid gap-4">
      <h5 className="text-gray-800 font-semibold text-lg mb-4 dark:text-white">
        {title}
      </h5>
      {children}
    </div>
  );
}
