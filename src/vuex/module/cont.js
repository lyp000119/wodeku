import axios from 'axios';
export default {
    namespaced: true,
    actions: {
        listcont ({commit},{
            page,
            page_size
        }) {
            return new Promise((resolve, reject) => {
                axios.get('/api/product/list',{
                    params:{
                      page,
                      page_size
                    }
                }).then((res) =>{
                    resolve(res);
                    // this.arr = [...this.arr,...res.data.list]
                })
            } )
        }
    }    
};
