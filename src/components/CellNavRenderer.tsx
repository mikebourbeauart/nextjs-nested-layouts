import { forwardRef, PropsWithChildren } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import { DataValue } from "ag-grid-community";

const CellLinkRenderer = forwardRef(
  (
    props: PropsWithChildren<{
      value: string;
      data: DataValue;
      rowIndex: number;
    }>,
    ref
  ) => {
    const router = useRouter();
    const value = props.value;
    const rowIndex = props.rowIndex;
    // const href = `/classes/${props.data.id}`
    const { team } = router.query;
    const href = `/teams/${team}/${rowIndex}`;

    // const onClickHandler = () => {
    //   console.log("clicked");
    //   router.push(
    //     {
    //       pathname: href,
    //       query: { sortBy: "price" },
    //     },
    //     undefined,
    //     { shallow: true }
    //   );
    // };

    return (
      <Link passHref={true} href={href}>
        <a
          className="group flex flex-row items-center justify-between"
          aria-disabled="true"
        >
          {value + "Link"}
        </a>
      </Link>
    );
  }
);

CellLinkRenderer.displayName = "CellLinkRenderer";

export default CellLinkRenderer;
