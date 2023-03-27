import { FC, useEffect } from "react";

import styles from "./DataTable.module.scss";

import TableSection from "./TableSection/TableSection";
import LoadingOrItems from "@components/ui/LoadingOrItems";
import { useDataStore } from "../../../context/dataStore";


export interface IDataTable {
  loading: boolean,
  loadingData: boolean
}

const DataTable: FC<IDataTable> = ({ loading, loadingData }) => {

  const data = useDataStore((store) => store.data);
  const attributes = useDataStore((store) => store.attributes);
  const setIsSelect = useDataStore((store) => store.setIsSelect);
  const setIsSelectLines = useDataStore((store) => store.setIsSelectLines);

  function selectItem(keyBoard: any) {

    switch (navigator.platform) {
      case "MacIntel":
        if (keyBoard.metaKey) {
          setIsSelect(false);
        }
        break;
      default:
        if (keyBoard.ctrlKey) {
          setIsSelect(false);
        }
        break;
    }

    if (keyBoard.shiftKey) {
      setIsSelectLines(true);
    }

  }

  const resetSelectItem = () => {
    setIsSelect(true);
    setIsSelectLines(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", selectItem);
    document.addEventListener("keyup", resetSelectItem);
    return () => {
      document.removeEventListener("keydown", selectItem);
      document.removeEventListener("keyup", resetSelectItem);
    };
  }, []);

  return (
    <div className={styles.table}>
      <table className={styles.item}>
        <LoadingOrItems loading={loadingData}
                        length={data.length}
                        emptyTitle={'Данных нет'}>
        <TableSection loadingData={loadingData} />
        </LoadingOrItems>
      </table>
    </div>
  );
};

export default DataTable;