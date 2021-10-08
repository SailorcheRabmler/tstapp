'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: "zzzzz", cnt: 0 };
        //this.ff = function () {
        //    return "fffffff";
        //}

        this.func = function (obj)
        //function eachRecursive(obj) 
        {
            //debugger;
            
            //var cntr = 0;
            for (var k in obj) {
                //debugger;
                if (typeof obj[k] == "object" && obj[k] !== null) {
                    //debugger;
                    this.state.cnt += 1;
                    this.func(obj[k]);
                    
                }
                else { //break; 
                }
                // do something... 
            }
            //return "";
        }
        //this.state = { cnt: 0 };
        
    }

    render() {


        return e(
            'button',
            {
                id: 'rctbtn',
                onClick: () => {
                    //debugger;
                    var dom_el = document.body;
                    var ng_el = angular.element(dom_el);
                    var ng_el_scope = ng_el.scope();
                    //ng_el_scope.comments.children;
                    //var json = ng_el_scope.comments.children;
                    var json = ng_el_scope.comments;
                    var arr = [];
                    Object.keys(json).forEach(function (key) {
                        arr.push(json[key]);
                    });
                    //debugger;
                    var aaa = arr.map(item => item.text);
                    
                    //func(json);
                    //var eee = this.ff();
                    //this.setState({ cnt: 0 });
                    this.state.cnt = 0;
                    this.func(json);
                    debugger;
                    this.setState({ cnt: (this.state.cnt-1)/2 });

                    //aaa = "ddddddd";
                }
            },
            this.state.cnt
        );

    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

