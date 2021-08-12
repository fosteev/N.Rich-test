import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../../utils/request";
import { setNews } from "../../redux/actions/news";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
       display: 'flex'
    },
    card: {
        height: 300,
        width: 300,
        margin: 10
    }
}))

export default function News() {
    const styles = useStyles();
    const { items } = useSelector(state => state.news);
    const dispatch = useDispatch();

    const getNews = async () => {
        try {
            const resp = await request('/news').get();
            dispatch(
                setNews(resp)
            )
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (items.length === 0) {
            getNews();
        }
    }, [items]);

    return (
        <div className={ styles.root }>
            {
                items.map(i => (
                        <Card className={ styles.card } key={ i.header }>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    { i.header }
                                </Typography>
                                <Typography>
                                    { i.text }
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                )
            }
        </div>
    )
}
