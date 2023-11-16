import {makeAutoObservable} from "mobx";

export default class VideoStore {
    constructor() {
        this._videos=[

        ]
        this._categories=[
            {id:1,name :"All"},
            {id:2,name:"Rock"},
            {id:3,name:"Sport"},
            {id:4,name:"Programming"},
        ]
        this._selectedCategory={}
        makeAutoObservable(this)
    }

    setVideos(videos) {
        this._videos = videos
    }
    setCategories(categories){
        this._categories=categories
    }
    setSelectedCategory(category){
        this._selectedCategory=category
    }
    get videos () {
        return this._videos
    }
    get categories(){
        return this._categories
    }
    get selectedCategory(){
        return this._selectedCategory
    }
}