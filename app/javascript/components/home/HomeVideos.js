/*
Copyright 2019 Politica para Todos

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { PureComponent } from "react";
import { Row, Col } from "antd";
import YouTubePlayer from 'react-player/lib/players/YouTube'

class HomeVideos extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <section className="home-videos">
                <Row>
                    <Col span={24} lg={24}>
                        <div className='player-wrapper'>
                          <YouTubePlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=up0Gfd5c0cM"
                            width='100%'
                            height='100%'
                            controls
                          />
                        < /div>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default HomeVideos;