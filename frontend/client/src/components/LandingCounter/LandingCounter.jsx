import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function LandingCounter({ count }) {
  const [courseCounter, setCourseCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCourseCounter((prevCount) => prevCount + 1);
    }, 1);

    if (courseCounter === count) {
      clearInterval(interval);
    }

    // useEffect cleanup
    return () => clearInterval(interval);
  }, [count, courseCounter]);

  return (
    <span className="text-lg text-gray-800 dark:text-white">
      {courseCounter}
    </span>
  );
}
