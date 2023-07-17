import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {Sound2Component} from "./sound2/sound2.component";
import {IconEmojiComponent} from "./icon-emoji/icon-emoji.component";
import {Dataemoji2Component} from "./dataemoji2/dataemoji2.component";
import {IosIconComponent} from "./ios-icon/ios-icon.component";
import {IosDataEmojiComponent} from "./ios-data-emoji/ios-data-emoji.component";
import {IosEmojiTalkComponent} from "./ios-emoji-talk/ios-emoji-talk.component";
import {DataEmojiComponent} from "./data-emoji/data-emoji.component";
import {EmojiComponent} from "./emoji/emoji.component";
import {EmojiFrameComponent} from "./emoji-frame/emoji-frame.component";
import {EmojiTalkComponent} from "./emoji-talk/emoji-talk.component";

const routes: Routes = [
  {path:"data-emoji", component:DataEmojiComponent},
  {path:"data-emoji-2", component:Dataemoji2Component},
  {path:"emoji", component:EmojiComponent},
  {path:"emoji-frame", component:EmojiFrameComponent},
  {path:"emoji-talk", component:EmojiTalkComponent},
  {path:"sound2",component:Sound2Component},
  {path:"icon",component:IconEmojiComponent},
  {path:"dataemoji2",component:Dataemoji2Component},
  {path: "ios", children : [
      {path:"icon",component:IosIconComponent},
      {path:"data-emoji",component:IosDataEmojiComponent},
      {path:"emoji-talk",component:IosEmojiTalkComponent}
    ]},
  {path:"login",component:LoginComponent},
  {path:"",component:EmojiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
