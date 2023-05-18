import { useEffect } from "react";

function DetailPage({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <div>Detail Page</div>;
}

export default DetailPage;
