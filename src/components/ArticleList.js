import React from "react";
import Article from "./Article";
import {v4 as uuidv4} from "uuid";

function ArticleList({posts}) {
    return (
        <main>
            {posts.map(obj=>{
                return ( 
                <Article 
                    key={uuidv4()} 
                    title={obj.title} 
                    date={obj.date} 
                    preview={obj.preview} 
                />
                )
            })}
        </main>
    )
};

export default ArticleList;