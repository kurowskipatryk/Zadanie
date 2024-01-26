using BlazorApp1.Data;
using Microsoft.AspNetCore.Components;

namespace BlazorApp1.Components
{
    public partial class UserComponent
    {
        [Parameter]
        public User userContext{ get; set; }
    }


}
