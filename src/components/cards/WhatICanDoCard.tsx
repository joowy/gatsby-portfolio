import React from "react";
import {
  Typography,
  Grid,
  Avatar,
  CardHeader,
  Card,
  SvgIcon,
} from "@material-ui/core";

type Props = {
  icon: any;
  title: string;
  description: string;
};

export const WhatICanDoCard: React.FC<Props> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader
          avatar={
            <Avatar>
              <SvgIcon component={icon} />
            </Avatar>
          }
          title={
            <Typography component="h2" variant="h6">
              {title}
            </Typography>
          }
          subheader={
            <Typography variant="body1" color="textSecondary">
              {description}
            </Typography>
          }
        />
      </Card>
    </Grid>
  );
};
