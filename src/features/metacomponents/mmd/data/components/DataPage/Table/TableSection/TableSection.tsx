import { FC } from "react";

import DataTableHeader from "./TableHeader/DataTableHeader";

import { useDataStore } from "../../../../context/dataStore";
import DataPageRow from "./PageRow/DataPageRow";
import { IDataSection } from "types/mmd/mmd.types";
import LoadingOrItems from "@components/ui/LoadingOrItems";


const TableSection: FC<{ loadingData: boolean }> = ({ loadingData }) => {

  const data = useDataStore((store) => store.data);

  return (
    <>
      <DataTableHeader loadingData={loadingData} />
      <LoadingOrItems loading={loadingData} length={data.length} emptyTitle={'Данных нет'}>
        <tbody>
        {data.map((item: IDataSection, index: number) =>
          <DataPageRow index={index} item={item} key={item.rowId} />
        )}
        {data?.length == 0 && <h4>Данных нет</h4>}
        </tbody>
      </LoadingOrItems>
    </>
  );
};

export default TableSection;