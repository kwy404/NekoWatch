import React from 'react';
import styled from 'styled-components'
import { Piscar } from './piscar';

const Title = styled.a`
    font-size: 1.4vw;
    color: #e5e5e5;
    font-weight: 700;
    margin: 0 4% .5em 4%;
    text-decoration: none;
    display: inline-block;
    min-width: 6em;
    @media (max-width: 1500px) {
        font-size: 1.4vw;
    }

    @media (max-width: 1200px) {
        font-size: 2vw;
    }

    @media (max-width: 800px) {
        font-size: 3vw;
    }
`;

const RowHeader = styled.h2`
    line-height: 1.3;
    margin: 0;
`

const LolomoRow = styled.div`
    margin: 3vw 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    outline: 0;
    z-index: ${(props) => props.hovered ? '10' : '0'};
`

const RowContainer = styled.div`
    -webkit-transition: -webkit-transform .54s cubic-bezier(.5,0,.1,1) 0s;
    transition: -webkit-transform .54s cubic-bezier(.5,0,.1,1) 0s;
    -o-transition: -o-transform .54s cubic-bezier(.5,0,.1,1) 0s;
    -moz-transition: transform .54s cubic-bezier(.5,0,.1,1) 0s,-moz-transform .54s cubic-bezier(.5,0,.1,1) 0s;
    transition: transform .54s cubic-bezier(.5,0,.1,1) 0s;
    transition: transform .54s cubic-bezier(.5,0,.1,1) 0s,-webkit-transform .54s cubic-bezier(.5,0,.1,1) 0s,-moz-transform .54s cubic-bezier(.5,0,.1,1) 0s,-o-transform .54s cubic-bezier(.5,0,.1,1) 0s;
`

const PtrackContainer = styled.div`
    -webkit-transition: -webkit-transform .54s cubic-bezier(.5,0,.1,1) 0s;
    transition: -webkit-transform .54s cubic-bezier(.5,0,.1,1) 0s;
    -o-transition: -o-transform .54s cubic-bezier(.5,0,.1,1) 0s;
    -moz-transition: transform .54s cubic-bezier(.5,0,.1,1) 0s,-moz-transform .54s cubic-bezier(.5,0,.1,1) 0s;
    transition: transform .54s cubic-bezier(.5,0,.1,1) 0s;
    transition: transform .54s cubic-bezier(.5,0,.1,1) 0s,-webkit-transform .54s cubic-bezier(.5,0,.1,1) 0s,-moz-transform .54s cubic-bezier(.5,0,.1,1) 0s,-o-transform .54s cubic-bezier(.5,0,.1,1) 0s;
`

const SlideItem = styled.div`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 1;
    display: inline-block;
    position: relative;
    white-space: normal;
    vertical-align: top;
    width: 12vw;
    height: 8vw;
    position: relative;
    background: rgba(0,0,0,.70);
    left: 2%;
    border-radius: 0.45vw;
    // animation: ${Piscar} 1s ease-in infinite;
    margin-left: 0.34vw;
    cursor: pointer;    

    @media (max-width: 1500px) {
        width: 12vw;
        height: 8vw;
    }

    @media (max-width: 1200px) {
        width: 15vw;
        height: 10vw;
    }

    @media (max-width: 800px) {
        width: 21vw;
        height: 15vw;
    }

    @media (max-width: 600px) {
        width: 25vw;
        height: 17vw;
    }

    transition: transform 0.5s ease, margin 0.4s ease;
    
    transform: ${(props) => props.hovered ? 'scale(1.7)' : 'scale(1)'}});
    margin: ${(props) => props.hovered ? '0% 2.15% 0% 2.1%' : '0% 0.1vw 0%'};
    z-index: ${(props) => props.hovered ? '10' : '0'};
    box-shadow: ${(props) => props.hovered ? '0px 3px 1px rgba(0,0,0,.60)' : ''}
    border-radius: 0.4vw;
    clip-depth: 2;
    overflow: clip;
    box-shadow: -1px 1px 1px rgba(0,0,0,.30);
`

const Slider = styled.div`
    position: relative;
    margin: 0;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    z-index: 2;
    overflow: ${(props) => props.hovered ? '' : 'hidden'};
    white-space: nowrap;
    -webkit-transition: -webkit-transform 1.2s cubic-bezier(.5,0,.1,1) 0s;
    transition: -webkit-transform 1.2s cubic-bezier(.5,0,.1,1) 0s;
    -o-transition: -o-transform 1.2s cubic-bezier(.5,0,.1,1) 0s;
    -moz-transition: transform 1.2s cubic-bezier(.5,0,.1,1) 0s,-moz-transform 1.2s cubic-bezier(.5,0,.1,1) 0s;
    transition: transform 1.2s cubic-bezier(.5,0,.1,1) 0s;
    transition: transform 1.2s cubic-bezier(.5,0,.1,1) 0s,-webkit-transform 1.2s cubic-bezier(.5,0,.1,1) 0s,-moz-transform 1.2s cubic-bezier(.5,0,.1,1) 0s,-o-transform 1.2s cubic-bezier(.5,0,.1,1) 0s;
    width: 200%;
`

const RowContent = styled.div`
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
`

const WrapperImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Bottom = styled.div`
    width: 100%;
    height: calc(10vh + 40px);
    background: rgb(24,24,24);
    margin-top: -3vw;
    -webkit-border-bottom-right-radius: .2vw;
    -webkit-border-bottom-left-radius: .2vw;
    -moz-border-radius-bottomright: .4vw;
    -moz-border-radius-bottomleft: .2vw;
    border-bottom-right-radius: .2vw;
    border-bottom-left-radius: .2vw;
    box-shadow: -1px 1px 1px rgba(0,0,0,.50);
`

const Button = styled.div`
    border-radius: 10vw;
    width: 30px;
    height: 30px;
    transform: scale(0.65);
    position: absolute;
    left: 0.4vw;
    top: 0.4vw;
    transition: 0.4s ease;
    display: flex;
    z-index: 5;
    left: ${(props => props.more ? '10vw' : '5px')};
    top: ${(props => props.more ? '102%' : '102%')};
    background: ${(props => props.more ? 'rgba(0,0,0,.30)' : 'white')};
    border: ${(props => props.more ? '1.5px solid white' : '1.5px solid transparent')};
    :hover{
        transform: scale(0.85);
    }
`

const MoverButton = styled.div`
    width: 7.4vh;
    height: 8vw;
    background: rgba(0,0,0,.70);
    position: absolute;
    z-index: 20;
    right: ${(props) => props.right ? '0px' : ''};
    left: ${(props) => props.right ? '' : '0px'};
    float: ${(props) => props.right ? 'right' : ''};
    @media (max-width: 1500px) {
        height: 8vw;
    }

    @media (max-width: 1200px) {
        height: 10vw;
    }

    @media (max-width: 800px) {
        height: 15vw;
    }

    @media (max-width: 600px) {
        height: 17vw;
    }
    cursor: pointer;
    opacity: ${(props) => props.aparecer ? '1' : '0'};
    :hover{
        opacity: 1;
    }
`

const TitleItem = styled.h1`
    color: white;
    font-size: 14px;
    margin: 15px 10px;
    position: relative;
    top: 60%;
    @media (max-width: 1500px) {
        font-size: 14px;
    }

    @media (max-width: 1200px) {
        font-size: 10px;
    }
`

class Carrousel extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        filmes: this.props.filmes,
        hovered: {title: null},
        timerHover: null,
        slideIndex: 0,
        hoverCarrousel: false
    }
    }
    hoverMovie(filme, i, e){
        var hovered = {title: `${filme}/${i}`}
        console.log(window.innerHeight - e.clientY)
        if((window.innerHeight - e.clientY) < 500){
            hovered.isBottom = true
        }
        const timer = setTimeout(() => {
            this.setState({hovered: hovered})
        }, 400)
        this.setState({timerHover: timer})
    }
    outMovie(){
        this.setState({hovered: {title: null}})
        clearInterval(this.state.timerHover)
    }
    moverDireita(){
        this.setState({slideIndex: this.state.slideIndex + 1})
    }
    moverEsquerda(){
        this.setState({slideIndex: this.state.slideIndex - 1})
    }
    verMore(){
        var hovered = {title: this.state.hovered.title}
        hovered.more = true
        this.setState({hovered: hovered})
    }
    naoVerMore(){
        var hovered = {title: this.state.hovered.title}
        hovered.more = undefined
        this.setState({hovered: hovered})
    }
    render() {
      return <div>
          <div className="slider">
            <LolomoRow 
            onMouseEnter={() => this.setState({hoverCarrousel: true})}
            onMouseLeave={() => this.setState({hoverCarrousel: false})}
            hovered={this.state.hovered.title != null}>
                <RowHeader>
                    <Title>
                        { this.props.titulo }
                    </Title>
                    <RowContainer>
                        <PtrackContainer>
                            <RowContent>
                            <div className="absoluteDiv">
                                <MoverButton
                                onClick={() => this.moverDireita()}
                                right={true}
                                aparecer={this.state.hoverCarrousel}
                                >
                                    <i className="fas fa-arrow-right arrowIcon"></i>
                                </MoverButton>
                                {
                                    this.state.slideIndex > 0 &&
                                    <MoverButton
                                    onClick={() => this.moverEsquerda()}
                                    right={false}
                                    aparecer={this.state.hoverCarrousel}
                                    >
                                        <i className="fas fa-arrow-left arrowIcon"></i>
                                    </MoverButton>
                                }
                                </div>
                                <Slider
                                hovered={this.state.hovered.title != null}
                                style={{transform: `translateX(-${this.state.slideIndex * 38}%)`}}
                                >
                                    { this.state.filmes.map((item, i) => 
                                    <SlideItem
                                    onMouseEnter={(e) => this.hoverMovie(item, i, e)}
                                    onMouseLeave={() => this.outMovie()}
                                    hovered={`${this.state.hovered.title}` == `${item}/${i}`}
                                    isBottom={`${(this.state.hovered.title == `${item}/${i}` && this.state.isBottom != undefined ? true : false )}`}
                                    >
                                    <WrapperImage src={item}>
                                    
                                    </WrapperImage>
                                    { 
                                    `${this.state.hovered.title}` == `${item}/${i}` &&
                                    <div>
                                    <Bottom>
                                        <Button>
                                            <i className="fas fa-play playIcon"></i>
                                        </Button>
                                        {
                                            this.state.hovered.more != undefined && <div className='popModel'>
                                            <h1>Mais informações</h1>
                                        </div>
                                        }
                                        <Button
                                        onMouseEnter={() => this.verMore()}
                                        onMouseLeave={() => this.naoVerMore()}
                                        more={true}>
                                            <i className="fas fa-chevron-down playIcon ArrowIconDown"></i>
                                        </Button>
                                        <TitleItem>Filme Titulo</TitleItem>
                                    </Bottom>
                                    </div>
                                    }
                                    </SlideItem>
                                    ) }
                                </Slider>
                            </RowContent>
                        </PtrackContainer>
                    </RowContainer>
                </RowHeader>
            </LolomoRow>
          </div>
      </div>;
    }
  }

  export default Carrousel