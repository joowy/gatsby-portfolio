import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { WhatICanDoCard } from "../cards/WhatICanDoCard";
import PortfolioContext from "../../context/context";

export const WhatICanDo: React.FC = () => {
  const { whatICanDo } = useContext(PortfolioContext);
  const { projects } = whatICanDo;

  return (
    <Grid container spacing={2} alignItems="center">
      {projects &&
        projects?.map((items) => {
          const { id, icon, title, description } = items;
          return (
            <WhatICanDoCard
              key={id}
              icon={icon}
              title={title}
              description={description}
            />
          );
        })}
    </Grid>
  );
};
