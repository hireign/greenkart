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
                    heading:'SEEDS'
                },
                {
                    id: 2,
                    img:'/images/SOILS.jpg',
                    heading:'SOILS'
                },
                {
                    id: 3,
                    img:'/images/HOSES.jpg',
                    heading:'HOSES'
                },
                {
                    id: 4,
                    img:'/images/TOOLS.jpg',
                    heading:'TOOLS',
                }
                
                ,{
                    id: 5,
                    img:'/images/Plants.jpg',
                    heading:'PLANTS'
                },
                {
                    id: 5,
                    img:'/images/Pest_control.jpg',
                    heading:'PEST CONTROL'
                }
            ]
        }
    }
    render(){

        console.log('Categories:'+this.state.categories);
        return( 
            <div className="HomePage">
                <CategoryCardComponentList data = {this.state.categories }></CategoryCardComponentList>
            </div>
        );
    }
   
  }

export default HomePage;