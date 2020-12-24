import React from "react";
import {
  makeStyles,
  Typography,
  Grid,
  CardHeader,
  CardContent,
  CardActionArea,
  Card,
  Avatar,
  CardMedia,
  SvgIcon,
  Chip,
} from "@material-ui/core";
import ProjectImg from "../Image/ProjectImg";

import { ExpandCardContent } from "./ExpandCardContent";
type Props = {
  id: string;
  name: string;
  date: string;
  link: string;
  detail: Array<string>;
  imageFileName: string;
  icon: any;
  tags: Array<string>;
};
const useStyles = makeStyles(() => ({
  cardMedia: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardHeader: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));
export const ProjectCard: React.FC<Props> = ({
  id,
  name,
  date,
  link,
  detail,
  imageFileName,
  icon,
  tags,
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea
          title={name || ""}
          href={link || ""}
          rel="external noreferrer noopener nofollow"
          target="_blank"
        >
          <CardMedia>
            <ProjectImg filename={imageFileName} alt={name} />
          </CardMedia>
        </CardActionArea>
        <ExpandCardContent
          id={id}
          defaultExpanded={false}
          title={
            <CardHeader
              className={classes.cardHeader}
              avatar={
                <Avatar>
                  <SvgIcon component={icon} />
                </Avatar>
              }
              title={
                <>
                  <Typography
                    variant="body2"
                    component="div"
                    color="textSecondary"
                  >
                    {date}
                  </Typography>
                  <Typography component="h2" variant="h6">
                    {name}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="div"
                    color="textSecondary"
                  >
                    {tags.map((tag) => (
                      <Chip
                        variant="outlined"
                        size="small"
                        key={tag}
                        label={tag}
                      />
                    ))}
                  </Typography>
                </>
              }
            />
          }
          detail={
            <CardContent>
              {detail.map((line) => {
                return (
                  <Typography
                    key={detail.indexOf(line)}
                    variant="body2"
                    component="div"
                    paragraph
                  >
                    {line}
                  </Typography>
                );
              })}
            </CardContent>
          }
        />
      </Card>
    </Grid>
  );
};
