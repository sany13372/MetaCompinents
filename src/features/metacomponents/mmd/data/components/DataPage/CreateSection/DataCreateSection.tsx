import { FC } from "react";
import cn from "clsx";

import styles from "./DataCreateSection.module.scss";

import { useDataStore } from "../../../context/dataStore";
import DataForm from "@mmd/data/components/DataPage/CreateSection/UpdateForm/DataForm";

const DataCreateSection: FC = () => {

  const showTable = useDataStore((store) => store.showTable);

  return (
    <div className={cn(styles.table, {
      [styles.active]: showTable,
      [styles.disable]: !showTable
    })}>
      <DataForm />
    </div>
  );
};

export default DataCreateSection;