import React from 'react';
import './Home.scss';
import { Input, Icon, Button, Text } from 'atomize';

function Home() {
    return (
        <div className="Container">
            <Text tag="h1" textSize="display1" m={{ b: "4rem" }}>
            Undo
            </Text>
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
            <Button
                suffix={
                <Icon
                    name="LongRight"
                    size="16px"
                    color="white"
                    m={{ l: "1rem" }}
                />
                }
                shadow="3"
                hoverShadow="4"
                m={{ r: "1rem" }}
            >
                Jouer
            </Button>
            <Button
                suffix={
                <Icon
                    name="LongRight"
                    size="16px"
                    color="white"
                    m={{ l: "1rem" }}
                />
                }
                shadow="3"
                hoverShadow="4"
                m={{ r: "1rem" }}
            >
                Creéer une partie
            </Button>
        </div>
    );
}
export default Home;