using MusicPlayah.Models;
using ReactiveUI;
using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;

namespace MusicPlayah.ViewModels
{
    public class MainWindowViewModel : ReactiveObject
    { 
        public List<Song> Songs => new List<Song>() { new Song() { Title="Bones - Mortuary", URL="U mom gei"}, new Song() { Title = "Pouya - Settle Down", URL = "hah" } };
    }
}
