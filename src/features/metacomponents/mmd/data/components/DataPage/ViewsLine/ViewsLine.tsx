import { FC, useEffect, useState } from "react";
import cn from "classnames";

import styles from "./ViewsLine.module.scss";
import { IView } from "types/mmd/mmd.types";
import { useDataStore } from "@mmd/data/context/dataStore";
import { useViewStore } from "@mmd/data/context/viewStore";
import EditingImg from "@img/Editing.png";
import CrossImg from "@img/Cross.png";
import { ViewServices } from "@services/mmd/view.service";
import { useMmdContext } from "@context/mmd/MmdProvider";


interface IViewsLine {
  viewsData: IView[];
}

const ViewsLine: FC<IViewsLine> = ({ viewsData }) => {

  const { entity, entityEditing } = useMmdContext();
  const [views, setViews] = useState<IView[]>([]);

  const refetch = useDataStore((store) => store.refetch)
  const setRefetch = useDataStore((store) => store.setRefetch)
  const viewid = useDataStore((store) => store.viewId);
  const setViewid = useDataStore((store) => store.setViewId);
  const setCreator = useViewStore((store) => store.setCreator);
  const setViewId = useViewStore((store) => store.setViewId);
  const setName = useViewStore((store) => store.setName);
  const setDescription = useViewStore((store) => store.setDescription);
  const setViewUpdate = useViewStore((store) => store.setViewUpdate);

  useEffect(() => {
    if (viewsData) {
      //setViews(viewsData.filter((view) => validateView(view)))
      setViews(viewsData);
    }
  }, [viewsData]);

  const selectView = (id: string) => {
    setViewid(id);
  };

  const updateHandle = (id: string, name: string, description: string, creator: string) => {
    setViewId(id);
    setName(name);
    setDescription(description);
    setCreator(creator);
    setViewUpdate(true);
  };

  const deletedHandle = async (id: string) => {
    await ViewServices.deleted(entity.entityId, id, "Alex");
    if (refetch === true){
      setRefetch(false)
    } else {
      setRefetch(true)
    }
  };

  return (
    <div className={styles.line}>
      {views?.length > 0 && views.map((view) =>
        <h4
          className={cn(styles.view, {
            [styles.active]: view.viewId === viewid
          })}
          onClick={() => selectView(view.viewId)}
          key={view.viewId}>
          {view.name}
          {entityEditing &&
            <div>
              <img src={EditingImg} alt="Картинка"
                   onClick={() => updateHandle(view.viewId, view.name, view.description, view.modifiedBy)} />
              <img src={CrossImg} alt="Картинка" onClick={() => deletedHandle(view.viewId)} />
            </div>
          }
        </h4>
      )}
    </div>
  );
};

export default ViewsLine;