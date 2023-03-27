import { ChangeEvent, FC, useEffect, useState } from "react";

import styles from "./EntitiesFilters.module.scss";

import { DatePicker, Input } from "antd";
import { IFilterData, IFilters } from "types/mmd/mmd.types";
import FilterImg from "@img/Filters.png";
import { calculationCountsPage } from "@utils/countsPage";
import { useDebounce } from "@hooks/useDebounce";
import { useMmdContext } from "@context/mmd/MmdProvider";
import { EntityServices } from "@services/mmd/entity.service";
import { useParams } from "react-router-dom";

const { RangePicker } = DatePicker;

const EntitiesFilters: FC<IFilters> = ({ setLoading, pagination, setPagination, refetch }) => {

  const { sortDateDesc, sortNameDesc, setEntities } = useMmdContext();
  const [filter, setFilter] = useState<IFilterData>({ date: [], query: "" });
  const debounceSearch = useDebounce(filter.query, 500);
  const param = useParams<{ profileId: string }>();

  useEffect(() => {
    EntityServices.getAll(param.profileId, debounceSearch, filter.date[0], filter.date[1], 100, 1, sortNameDesc, sortDateDesc)
      .then((data) => {
        const countsPage = calculationCountsPage(data.data.itemsPerPage, data.data.totalCount);
        setEntities(data.data.items);
        // setPagination({ ...pagination, total: data.data.totalCount });
        // if (pagination.activePage > countsPage) {
        //   setPagination({ ...pagination, activePage: countsPage });
        // }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    EntityServices.getAll(param.profileId, debounceSearch, filter.date[0], filter.date[1], 100, 1, sortNameDesc, sortDateDesc)
      .then((data) => {
        setEntities(data.data.items);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [debounceSearch, sortNameDesc, sortDateDesc, filter.date, refetch]);

  return (
    <div className={styles.line}>
      <div className={styles.search}>
        <div>
          <img src={FilterImg} alt="Фильтр" />
        </div>
        <Input
          placeholder={"Фильтрация по ключевым словам"}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFilter({ ...filter, query: e.target.value })}
          value={filter.query}
        />
      </div>
      <div>
        <div>
          <RangePicker
            className={styles.filterDate}
            defaultValue={filter.date}
            placeholder={["с", "по"]}
            onChange={(_: any, val: string[]) => setFilter({ ...filter, date: val })} />
        </div>
      </div>
    </div>
  );
};

export default EntitiesFilters;