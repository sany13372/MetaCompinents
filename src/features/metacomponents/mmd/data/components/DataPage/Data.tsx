import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Data.module.scss";

import DataTable from "./Table/DataTable";

//import {useMdmContext} from "../../../../context/mdm/MdmProvider";
//import {useLocalizationContext} from "../../../../context/LocalizationProvider";
import Burger from "@components/ui/icons/Burger/Burger";
import DataCreateSection from "./CreateSection/DataCreateSection";
import LineButtons from "./LineButtons/LineButtons";

import ViewsLine from "./ViewsLine/ViewsLine";

import BurgerImg from "@img/Burger.png";
import { useDataStore } from "../../context/dataStore";
import { IDataDto, IFieldData, IParam } from "types/mmd/mmd.types";
import { useMmdContext } from "@context/mmd/MmdProvider";
import { EntityServices } from "@services/mmd/entity.service";
import { DataServices } from "@services/mmd/data.service";
import { calculationCountsPage } from "@utils/countsPage";
import { AttributeServices } from "@services/mmd/attribute.service";
import DataTitile from "@mmd/data/components/DataPage/DataTitile/DataTitile";

const Data: FC = () => {

  const { entity, setEntity } = useMmdContext();
  const setData = useDataStore((store) => store.setData);
  const refetch = useDataStore((store) => store.refetch)
  const setAttributes = useDataStore((store) => store.setAttributes);
  const showTable = useDataStore((store) => store.showTable);
  const viewId = useDataStore((store) => store.viewId)
  const setViewId= useDataStore((store) => store.setViewId)
  const setShowTable = useDataStore((store) => store.setShowTable);
  const param = useParams<Readonly<Partial<IParam>>>();
  const [loadingEntity, setLoadingEntity] = useState<boolean>(false);
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [resetFilters, setResetFilters] = useState<boolean>(true);

  useEffect(() => {
    EntityServices.getById(param.profileId, param.entityId)
      .then((data) => {
        setEntity(data.data)
        setAttributes(data.data.attributes)
        //setViewId(data.data.views.filter((view) => validateView(view))[0].viewId)
        setViewId(data.data.views[0].viewId);
      })
      .catch((error) => {
        console.log(error.message);
        setLoadingEntity(false);
      })
      .finally(() => setLoadingEntity(false));
  }, [refetch]);

  useEffect(() => {

    if (entity.entityId) {
      setLoadingData(true);

      // const fields: IFieldData[] | undefined = attributes?.map((attribute) => ({
      //   "name": attribute.attributeName,
      //   "value": null,
      //   "filterOperation": null,
      //   "sortOperation": null
      // }));

      // const dataDto: IDataDto = {
      //     viewId: viewId,
      //     currentPage: pagination.activePage,
      //     itemsPerPage: pagination.limit,
      //     fields: fields
      // }

      const dataDto: IDataDto = {
        entityId:entity.entityId,
        currentPage: 1,
        itemsPerPage: 100,
      };

      DataServices.getAll(dataDto)
        .then((data) => {
          setData(data.data.items);
          //setPagination({...pagination, total: data.data.elementsCount})
          // const countsPage = calculationCountsPage(data.data.itemsPerPage, data.data.elementsCount)
          // if (pagination.activePage > countsPage) {
          //     setPagination({...pagination, activePage: countsPage})
          // }
        })
        .catch((error) => {
          //setLoadingData(false);
          console.log(error.message);
        })
        .finally(() => setLoadingData(false));
    }
  }, [entity, resetFilters,refetch]);

  return (
    <div>
      {/*<LineButtons/>*/}
      {/*<ViewsLine viewsData={entity.views} />*/}
      <DataTitile/>
      <div className={styles.line}>
        <DataTable loading={loadingEntity} loadingData={loadingData} />
        {!showTable && <Burger Img={BurgerImg} callBack={() => setShowTable(true)} />}
        <DataCreateSection />
      </div>
      {/*<Modal setPagination={setPagination} pagination={pagination}*/}
      {/*       viewId={viewId}*/}
      {/*       setResetFilters={setResetFilters}/>*/}
    </div>
  );
};

export default Data;