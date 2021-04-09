import NodeWrapper from "../src/NodeWrapper";
import { Node } from 'ts-morph';

export default class TestHelper { 
    static fs = require('fs');

    //based on NodeType
    static isWrappedTreeSame(node1 : NodeWrapper, node2 : NodeWrapper) : boolean { 
        let node1Children : NodeWrapper[] = node1.getChildren(); 
        let node2Children : NodeWrapper[] = node2.getChildren();
        //the nodes are not the same 
        if(node1.getType() != node2.getType()){ 
            return false
        } 
        // if both have no children 
        if(node1Children.length == 0 && node2Children.length == 0){
            return true;
        }
        if(node1Children.length != node2Children.length){
            return false 
        } else { //they have the same length so check the rest of the tree 
            let result = true; 
            for(let index = 0; index < node1Children.length; index++) {
                result = result && TestHelper.isWrappedTreeSame(node1Children[index], node2Children[index])
            }
            return result
        }


    }

    static fileToString(filePath : string) : string { 
        let path : string= __dirname + filePath;
        let data = this.fs.readFileSync(path, 'utf8')
        return data.toString()
    }
    
    static printTree(node: Node, indent : number = 0) : void {
        console.log(new Array(indent + 1).join(' ') + node.getKindName());
        node.getChildren().forEach(child => TestHelper.printTree(child, indent++))
    }

    static printWrappedTree(node: NodeWrapper, indent : number = 0): void {
        console.log(new Array(indent + 1).join(' ') + node.getType());
        node.getChildren().forEach(child => {
            TestHelper.printWrappedTree(child, indent++)
        });
    }
}
