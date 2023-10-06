import {Component, OnInit, ViewChild} from '@angular/core';
import {Theme} from "../../model/Theme";
import {ThemeService} from "../theme.service";
import {SourceImgComponent} from "../source-img/source-img.component";

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  @ViewChild(SourceImgComponent) source! : SourceImgComponent;
  category : string = "All"
  themeSelection = 0;
  themePropertySelection = ''
  constructor(public themeService : ThemeService) {
  }
  ngOnInit(): void {
  }
  create(){
    let theme = new Theme();
    theme.backGround = this.themeService.sourceBackground[0].url
    theme.avatar = this.themeService.sourceAvatar[0].url
    theme.call_icon = this.themeService.callIcons[0]
    this.themeService.saveTheme(theme, theme =>{
      console.log(theme)
      this.themeService.themes.unshift(theme)
    } )
  }
  save(i: number) {
    this.themeService.saveTheme(this.themeService.themes[i], theme => this.themeService.themes[i] = theme)
  }
  delete(i: any) {
    this.themeService.deleteTheme(this.themeService.themes[i], () => this.themeService.themes.splice(i,1))
  }

}
