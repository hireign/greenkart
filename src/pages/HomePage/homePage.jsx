import React from 'react';
import CategoryCardComponentList  from '../../components/CategoryCardComponentList/CategoryCardComponentList';
import './homepage.scss';

class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            categories : [
                {
                    id: 1,
                    img:'/images/garden_seeds.jpg',
                    heading:'SEEDS',
                    url: '/search/seed'
                },
                {
                    id: 2,
                    img:'/images/SOILS.jpg',
                    heading:'SOILS',
                    url: '/search/soil'
                },
                {
                    id: 3,
                    img:'/images/HOSES.jpg',
                    heading:'HOSES',
                    url: '/search/hose'
                },
                {
                    id: 4,
                    img:'/images/TOOLS.jpg',
                    heading:'TOOLS',
                    url: '/search/tool'
                }
                
                ,{
                    id: 5,
                    img:'/images/Plants.jpg',
                    heading:'PLANTS',
                    url: '/search/plant'
                },
                {
                    id: 6,
                    img:'/images/Pest_control.jpg',
                    heading:'PEST CONTROL',
                    url: '/search/pest'
                }
            ]
        }
    }
    render(){

        return( 
            <div className="HomePage">
                <CategoryCardComponentList data = {this.state.categories }></CategoryCardComponentList>
            </div>
        );
    }
   
  }

export default HomePage;