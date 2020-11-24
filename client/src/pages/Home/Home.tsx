import React from 'react';
const { Input, Icon } = require('atomize');

function Home() {
    return (
        <div className="Container">
            <h1>Home</h1>
            <Input
                placeholder="User Name"
                p={{ x: "2.5rem" }}
                prefix={
                <Icon
                    name="UserSolid"
                    color="warning800"
                    size="16px"
                    cursor="pointer"
                    pos="absolute"
                    top="50%"
                    left="0.75rem"
                    transform="translateY(-50%)"
                />}
            />
        </div>
    );
}
export default Home;