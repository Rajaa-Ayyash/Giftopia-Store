import { Divider, Flex, List, Rate, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import AddRating from './AddRating';
import { ViewRatingWrapper } from './styled';


export const ViewRatings = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,nat,picture&noinfo')
            .then((res) => res.json())
            .then((body) => {
                setData([...data, ...body.results]);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        loadMoreData();
    }, []);

    return (
        <div className='container'>
            <AddRating />
            <hr style={{ borderTop: 'dotted 2px' }} />
            <ViewRatingWrapper
                id="scrollableDiv">
                <InfiniteScroll
                    dataLength={data.length}
                    next={loadMoreData}
                    hasMore={data.length < 50}
                    loader={
                        <Skeleton
                            avatar
                            paragraph={{
                                rows: 1,
                            }}
                            active
                        />
                    }
                    endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                    scrollableTarget="scrollableDiv"
                >
                    <List
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item key={item.email}>
                                <List.Item.Meta
                                    title={item.name.last}
                                    description={item.email}
                                />
                                <Flex gap="small" vertical>
                                    <div>Some comment here</div> {/*the comment should be comeing from backend  */}
                                    <Rate style={{ paddingTop: '10px', color: '#F5CAC3' }} allowHalf defaultValue={2.5} disabled />
                                </Flex>
                            </List.Item>
                        )}
                    />
                </InfiniteScroll>
            </ViewRatingWrapper>
        </div>

    )
}

export default ViewRatings;
