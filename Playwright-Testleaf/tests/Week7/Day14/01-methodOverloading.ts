
class ElementActions{

public click(element:string) : void // implemetation 1 // normal click
public click(element:string,forceClick:boolean ):void // implementation 2 // force click

//common implementation

click(element:string,forceClick?:boolean):void{ //
//Case 1 one argument passed then else block will be implemented
//Case 2 2 arguments passed the if block will be implement 

    if(forceClick){
        console.log(`Forcibly clicking the element ${element}`);
        
    }else{
        console.log(`Normal clicking of the lement ${element}`);
        
    }
}
}

const actions = new ElementActions();
actions.click("#LoginButton") // //Case 1 one argument passed then else block will be implemented
actions.click("#LoginButton",true) ////Case 2 2 arguments passed the if block will be implement  